import React from 'react';

const AddTransaction = () => {
    return (
        <div className="form-wrapper">
            <form>
                <div className="input-group income">
                    <input type="text" placeholder="Ajoutez une entrée d'argent" autoComplete="off" />
                    <input type="number" placeholder="Montant" autoComplete="off" />
                    <input type="submit" value="submit" />
                </div>
            </form>
            <form>
                <div className="input-group expense">
                    <input type="text" placeholder="Ajoutez une dépense d'argent" autoComplete="off" />
                    <input type="number" placeholder="Montant" autoComplete="off" />
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddTransaction;