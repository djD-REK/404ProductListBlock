import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const classes = StyleSheet.create(getStyles(props))
  const products = props.data.items
  // Sort products by name if any products exist
  products && products.sort((a, b) => a.name.localeCompare(b.name))
  // Destructure remaining props into separate variables
  const { page_not_found_heading, text, product_list_heading } = props
  return (
    <React.Fragment>
      <h1 className={css(classes.example)}>{page_not_found_heading}</h1>
      <p>{page_not_found_text}</p>
      <h2>{product_list_heading}</h2>
      {
        // Only render the products list if there are products
        products && (
          <ul>
            {
              // Destructure each item into its properties
              products.map(({ id, name, seo_friendlyName }) => (
                <li key={id}>
                  <a href={"/p/" + seo_friendlyName}>{name}</a>
                </li>
              ))
            }
          </ul>
        )
      }
    </React.Fragment>
  )
}

Block.defaultProps = defaultConfig

export default Block
