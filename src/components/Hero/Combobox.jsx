
import { Combobox as HCombobox } from '@headlessui/react'
import { Box } from '@mui/material'
import clsx from 'clsx'
import { m, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'
import {
  HiChevronDown as ChevronIcon,
  HiXMark as CloseIcon,
} from 'react-icons/hi2'

export const Combobox = (props) => {
  const {
    label,
    placeholder = "",
    items,
    clearLabel = 'Clear',
    ...restProps
  } = props
  const [selectedItem, setSelectedItem] = useState(null)
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(
    () =>
      items.filter(({ label }) =>
        label
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, '')),
      ),
    [query, items],
  )

  return (
    <HCombobox
      value={selectedItem}
      onChange={setSelectedItem}
      nullable
      data-testid="combobox"
      {...restProps}
    >
      {({ open, value }) => (
        <Box container>
          <HCombobox.Button
            as="div"
            className={styles.inputWrapper}
            data-testid="combobox-trigger"
          >
            <HCombobox.Input
              className={clsx(
                styles.input,
                (open || value) && styles.inputPlaceholderVisible,
                'peer',
              )}
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(item) => item?.label}
              placeholder={placeholder}
              data-testid="combobox-input"
            />
            <HCombobox.Label
              className={clsx(
                styles.label,
                (open || value) && styles.labelFloating,
                'peer-disabled:mix-blend-darken',
              )}
            >
              {label}
            </HCombobox.Label>
            <span
              className={clsx(
                styles.iconWrapper,
                'peer-disabled:bg-neutral-100 peer-disabled:border-neutral-300 peer-disabled:cursor-not-allowed',
              )}
            >
              <ChevronIcon
                className={clsx(styles.icon, [open && styles.iconRotated])}
              />
            </span>
          </HCombobox.Button>
          <AnimatePresence>
            {open && (
              <HCombobox.Options
                as={m.ul}
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                className={styles.itemsContainer}
                static
              >
                <AnimatePresence>
                  {value && (
                    <m.li
                      className={styles.clearButtonWrapper}
                      initial={false}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                    >
                      <button
                        className={clsx(styles.item, styles.clearButton)}
                        onClick={() => setSelectedItem(null)}
                        data-testid="combobox-clear-button"
                      >
                        {clearLabel}
                        <CloseIcon className={styles.clearIcon} />
                      </button>
                    </m.li>
                  )}
                </AnimatePresence>
                {filteredItems.map((item, i) => (
                  <HCombobox.Option
                    key={i}
                    value={item}
                    data-testid="combobox-option"
                  >
                    {({ selected, active }) => (
                      <span
                        className={clsx(styles.item, [
                          selected && styles.itemSelected,
                          active && styles.itemActive,
                        ])}
                      >
                        {item.label}
                      </span>
                    )}
                  </HCombobox.Option>
                ))}
              </HCombobox.Options>
            )}
          </AnimatePresence>
        </Box>
      )}
    </HCombobox>
  )
}
