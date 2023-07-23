// stlyes
import styles from "./Drawer.module.scss";

// react, next
import { useContext, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

// context
import { CartContext } from "@/context/CartContext";
import { InternalizationContext } from "@/context/InternalizationContext";

// icon
import XIcon from "../../../public/icons/close-x-icon.svg";
import Image from "next/image";

export const Drawer = () => {
    const { t: translate } = useTranslation("header");
    const { isLanguagesActive } = useContext(InternalizationContext);

    const { isDrawerOpen, setIsDrawerOpen, cartProducts } =
        useContext(CartContext);

    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [isDrawerOpen]);

    console.log("cartProducts", cartProducts);

    return (
        <>
            <div
                onClick={() => setIsDrawerOpen(false)}
                className={
                    isDrawerOpen ? styles.GrayScreen : styles.DrawerWrapper
                }
            ></div>

            <div
                className={`${styles.DrawerWrapperVisible} ${
                    isDrawerOpen ? styles.Open : styles.Close
                }`}
            >
                <div className={styles.DrawerContainer}>
                    <div className={styles.ButtonClose}>
                        <Image
                            src={XIcon}
                            alt="X"
                            onClick={() => setIsDrawerOpen(false)}
                        />
                    </div>

                    {cartProducts?.length ? (
                        <>
                            <div className={styles.DrawerProducts}>
                                {cartProducts.map((product: any) => (
                                    <div
                                        key={product.name}
                                        className={styles.ProductItem}
                                    >
                                        <img
                                            className={styles.productImage}
                                            src={product.image}
                                            alt={product.name}
                                        />
                                        <div
                                            className={
                                                styles.productDescription
                                            }
                                        >
                                            <p>{product.name}</p>
                                            <div
                                                className={
                                                    styles.productDescription
                                                }
                                                dangerouslySetInnerHTML={{
                                                    __html: product.description,
                                                }}
                                            ></div>{" "}
                                        </div>

                                        <div className={styles.productPrice}>
                                            <p>{product.price}</p>
                                            <span>
                                                {isLanguagesActive("bg")
                                                    ? "лева"
                                                    : "BGN"}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.DrawerTotal}>
                                <div className={styles.Subtotal}>
                                    <h3>{translate("subtotal1")}</h3>
                                    {/* Calculate the total sum of products */}
                                    <h3>
                                        {cartProducts.reduce(
                                            (total: number, product: any) =>
                                                total + product.price,
                                            0
                                        )}
                                    </h3>
                                </div>
                                <p>{translate("subtotal2")}</p>
                                <button id={styles.CheckoutButton}>
                                    {translate("checkout")}
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.DrawerEmptyCart}>
                                <p>{translate("empty1")}</p>
                                <p>
                                    {translate("empty2")}{" "}
                                    <Link
                                        href="/shop"
                                        onClick={() => setIsDrawerOpen(false)}
                                    >
                                        {translate("here")}
                                    </Link>
                                    .
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
