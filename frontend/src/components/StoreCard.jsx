export default function StoreCard({ store, submitRating }) {
    return (
        <div>
            <h3>{store.name}</h3>
            <p>{store.address}</p>

            <select
                onChange={(e) => submitRating(store.id, e.target.value)}
            >
                <option>Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    );
}