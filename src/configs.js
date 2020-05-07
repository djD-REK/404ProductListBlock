import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  page_not_found_heading: {
    label: "Page Not Found Heading",
    type: ElementPropTypes.string,
  },
  page_not_found_text: {
    label: "Page Not Found Text Content",
    type: ElementPropTypes.string,
  },
  product_list_heading: {
    label: "Product List Heading",
    type: ElementPropTypes.string,
  },
}

export const defaultConfig = {
  page_not_found_heading: "Page Not Found",
  page_not_found_text: "Sorry, that page was not found.",
  product_list_heading: "All Products",
}
