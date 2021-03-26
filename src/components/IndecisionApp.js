import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] })) //This is just a shorthand syntax for returning a value
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[random]
        this.setState(() => ({ selectedOption: option }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) })) //we use concat instead of push because concat returns a new array while push makes changes to the array itself and we don't want that.
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    componentDidMount() { //This is a lifecycle method and is called implicitly. These methods are only accesible in class based Components.
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options: options }))
            }
        } catch (e) {
            //Do nothing at all.
        }


    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render() {

        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>

                </div>

                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        );
    }
}

export default IndecisionApp;