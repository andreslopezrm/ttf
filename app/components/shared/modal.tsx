import { shareTwitterUrl } from "~/utils/share";

type Props = {
    children?: JSX.Element;
    onClose: Function;
    shareUrl?: string | null;
}

export function Modal({ children, onClose, shareUrl }: Props) {
    return (
        <div id="defaultModal" aria-hidden="true" className=" bg-white bg-opacity-80 flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-10 w-full md:inset-0 h-modal md:h-full">
            <div className="max-w-2xl m-8 relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200">
                <div className="relative p-8 transition-all ease-in duration-75 bg-white rounded-md">
                    <div className="mb-4 flex justify-between">
                        <h3 className="font-bold text-xl">#TTF</h3>
                        <button type="button" onClick={() => onClose()}>
                            <img src="/img/incorrect.png" width="31" />
                        </button>
                    </div>
                    <div>
                        { children }
                    </div>
                    <div className="flex justify-end gap-2 mt-8">
                        <a href={shareTwitterUrl("twitter", shareUrl)} target="_blank" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-200">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
                                Tweet
                            </span>
                        </a>
                        <button type="button" onClick={() => onClose()} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-semibold rounded-lg text-base px-8 py-2.5 text-center mr-2 mb-2">
                            Acept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}