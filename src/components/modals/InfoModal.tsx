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
        Guess the Starcraft-related word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="P"
          status="correct"
        />
        <Cell value="R" />
        <Cell value="O" />
        <Cell value="B" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter P is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="R" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="O"
          status="present"
        />
        <Cell value="B" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter O is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="R" />
        <Cell value="O" />
        <Cell isRevealing={true} isCompleted={true} value="B" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter B is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is a lovingly Starcraftified flavor of an open source version of the word guessing game we all know and
        love.{' '}
        Check out the{' '}
        <a
          href="https://github.com/judytuna/btsdle/pull/1/files"
          className="underline font-bold"
        >
          Starcraftle code here
        </a>{' '}
        and the{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          original code here
        </a>!{' '}
      </p>
      <p>💙</p>
    </BaseModal>
  )
}
