import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
  <thead className={css.tableHead}>
    <tr>
      <th className={css.tableHeadItem}>Type</th>
      <th className={css.tableHeadItem}>Amount</th>
      <th className={css.tableHeadItem}>Currency</th>
    </tr>
  </thead>

    <tbody>
    {items.map(item => (
    <tr className={css.tableLine} key={item.id}>
            <td className={css.tableItem}>{item.type}</td>
            <td className={css.tableItem}>{item.amount}</td>
            <td className={css.tableItem}>{item.currency}</td>
    </tr>))}
  </tbody>
</table>
    )
}

TransactionHistory.propType = {
    items: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })
}
