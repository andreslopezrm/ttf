const gradients = [
    "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    "bg-gradient-to-r from-green-400 via-blue-600 to-purple-700",
    "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
    "bg-gradient-to-r from-indigo-400 via-red-400 to-yellow-300",
    "bg-gradient-to-r from-yellow-300 via-yellow-600 to-yellow-700",
    "bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900",
    "bg-gradient-to-r from-green-400 via-green-600 to-purple-700",
    "bg-gradient-to-r from-rose-400 via-fuchsia-600 to-indigo-600",
    "bg-gradient-to-r from-yellow-300 via-pink-400 to-pink-600"
]

export function getGradientColor(index: number): string {
    const total = gradients.length;

    if(index < total) {
        return gradients[index];
    }
    
    const divider = index / total;
    const range = index / divider;
    return gradients[range - 2];
}