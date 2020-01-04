// React Notes


		// function filterId(c) {
    //   return c.id !== counterId;
		// }
		// const counters = this.state.counters.filter(filterId);
    // this.setState({ counters: counters });

		// Simplified Version of the Above Code
    const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters });
		
		// Raising Event Handlers from a child to a parent means also passing the events from the child to the parent
		// Ex:
		// ChildComponent.jsx
		handleReset = () => {
			// handleReset Code Goes Here...
		};
		<ChildComponent onReset={this.handleReset} />
		// /ChildComponent.jsx

		/* ↓↓↓ */

		// ParentComponent.jsx
		handleReset = () => {
			// handleReset Code Goes Here...
		};
		<ParentComponent onReset={this.handleReset} />
		// /ParentComponent.jsx

		// ChildComponent.jsx
		<ChildComponent onReset={this.props.onReset} />
		// /ChildComponent.jsx

		// Raising the State also requires some modifying of the parent/child components
		// Ex:
		// ChildComponent.jsx
		// Note that the example here is using an array.map() function to output the inner Child Components
		// These Children will be GrandChildren of the new Parent Component.
		state = {
			// State Properties go here...
		}
		{this.state.children.map(child => (
			<ChildComponent
				key={child.id}
				onDelete={this.props.onDelete}
				onIncrement={this.props.onIncrement}
				child={child}
			></ChildComponent>
		))}
		// /ChildComponent.jsx

		/* ↓↓↓ */

		// ParentComponent.jsx
		state = {
			// State Properties go here...
		}
		<ParentComponent childComponents={this.state.ChildComponents} onReset={this.handleReset} />
		// /ParentComponent.jsx

		// ChildComponent.jsx
		{this.props.children.map(child => (
			<ChildComponent
				key={child.id}
				onDelete={this.props.onDelete}
				onIncrement={this.props.onIncrement}
				child={child}
			></ChildComponent>
		))}
		// /ChildComponent.jsx

// Object Destructuring
	{this.props.children.map(child => (
		<ChildComponent
			key={child.id}
			onDelete={this.props.onDelete}
			onIncrement={this.props.onIncrement}
			child={child}
		></ChildComponent>
	))}

	/* ↓↓↓ */

	const {children,onDelete,onIncrement} = this.props;
	{children.map(child => (
		<ChildComponent
			key={child.id}
			onDelete={onDelete}
			onIncrement={onIncrement}
			child={child}
		></ChildComponent>
	))}