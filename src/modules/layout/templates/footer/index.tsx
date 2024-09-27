import { Text, clx } from "@medusajs/ui"
import { getCategoriesList, getCollectionsList } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
// import Logo from '/public/logo.png'

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 15)
  const { product_categories } = await getCategoriesList(0, 15)

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex  flex-col gap-x-28 gap-y-6 md:flex-row items-start justify-between py-20 space-y-10 md:space-y-0">
          <div className="flex items-center max-w-[210px]">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              Kz-home
            </LocalizedClientLink>
          </div>

          <div className="text-small-regular max-w-4xl gap-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Company</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href={`/about-us`}
                  >
                    About Us
                  </LocalizedClientLink>
                </li>  <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href={`/privacy-policy`}
                  >
                    Privacy Policy
                  </LocalizedClientLink>
                </li>

                <li>
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base"
                    href={`/terms-of-use`}
                  >
                    Terms of use
                  </LocalizedClientLink>
                </li>

              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Support</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    href="/contact-us"
                    className="hover:text-ui-fg-base"
                  >
                    Contact Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <a
                    href="tel:+19544052506"
                    target="_blank"
                    className="hover:text-ui-fg-base"
                  >
                    Phone: +19544052506
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@developersworld.io"
                    target="_blank"
                    className="hover:text-ui-fg-base"
                  >
                    Email: info@developersworld.io
                  </a>
                </li>
         
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}
