import React from "react";
import { FaTimes } from "react-icons/fa";

const ImageContainer = React.forwardRef((props, ref) => {
    const [visible, setVisible] = React.useState(false);

    React.useImperativeHandle(
        ref,
        () => ({
            open: () => setVisible(true),
            close: () => setVisible(false),
        }),
        []
    );

    return (
        <div
            style={{
                background: "rgba(0, 0, 0, 0.4)",
            }}
            className={`${visible ? "translate-y-0" : "-translate-y-full"
                } duration-500 transition transform fixed top-0 left-0 z-30 w-full`}
        >
            <section className={"h-screen text-center pt-20 lg:pt-10"}>
                <div
                    className={
                        "bg-gray-800 lg:border lg:rounded lg:shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] lg:w-7/12 lg:mx-auto lg:py-16"
                    }
                >
                    <div className="mb-4">
                        <div className="flex justify-end pr-4 lg:pr-8">
                            <span
                                onClick={() => setVisible(false)}
                                className="cursor-pointer bg-gray-400 rounded-full p-2 inline-flex justify-center items-center"
                            >
                                <FaTimes className="text-gray-700" />
                            </span>
                        </div>
                        <h1
                            className={
                                "text-gray-400 text-xl lg:text-4xl text-white font-semibold shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
                            }
                        >
                            Speed Violation Image
                        </h1>
                    </div>
                    <div className="h-auto flex justify-center items-center relative w-full">
                        {props.image ? (
                            <img src={props.image} alt="Failed to display image" />
                        ) : (
                            <h1 className="text-gray-400 text-center text-4xl lg:text-6xl text-white font-semibold shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]">
                                There is currently no image to display.
                            </h1>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
});

ImageContainer.displayName = "Image Container";

export default ImageContainer;
