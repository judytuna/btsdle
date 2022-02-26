import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the BTS-related word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="O"
          status="correct"
        />
        <Cell value="R" />
        <Cell value="U" />
        <Cell value="L" />
        <Cell value="8" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter O is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="O" />
        <Cell value="R" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="present"
        />
        <Cell value="L" />
        <Cell value="8" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="O" />
        <Cell value="R" />
        <Cell value="U" />
        <Cell isRevealing={true} isCompleted={true} value="L" status="absent" />
        <Cell value="8" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is not in the word in any spot.
      </p>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        There won't be numbers in the word list. I was just using ORUL8,2? as an example!
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love, with a Bangtan twist -{' '}
        <a
          href="https://github.com/judytuna/btsdle"
          className="underline font-bold"
        >
          check out the code for BTSdle here
        </a>{' '}
        and see the{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          original code here
        </a>.{' '}
      </p>
      <p>💜</p>
    </BaseModal>
  )
}
